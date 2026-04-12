import fs from 'fs';
import https from 'https';

const url = process.argv[2];
const outPath = process.argv[3];
const isVideo = outPath.endsWith('.mp4');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        let regex = isVideo ? /https:\/\/[^"'\\]+\.mp4/g : /https:\/\/[^"'\\]+\.(jpg|png)/g;
        let matches = data.match(regex) || [];
        
        if (!isVideo) {
            let metaMatch = data.match(/<meta property="og:image" content="([^"]+)"/);
            if (metaMatch) matches.push(metaMatch[1]);
        }
        
        if (matches.length > 0) {
            matches = [...new Set(matches)];
            let target = matches[0];
            
            if (isVideo) {
                target = matches.find(m => m.includes('720') || m.includes('1080') || m.includes('v1.pinimg.com')) || target;
            } else {
                target = matches.find(m => m.includes('originals')) || target;
            }
            
            console.log("Downloading", target);
            const file = fs.createWriteStream(outPath);
            https.get(target, response => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log("Success! Saved as", outPath);
                });
            });
        } else {
            console.log("No media found matching requirement.");
        }
    });
}).on('error', err => console.log(err));
