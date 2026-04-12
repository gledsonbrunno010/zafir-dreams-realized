import fs from 'fs';
import https from 'https';

const url = "https://pt.pinterest.com/pin/63754150969150538/";

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const regex = /https:\/\/[^"'\\]+\.mp4/g;
        let matches = data.match(regex);
        if (matches) {
            matches = [...new Set(matches)];
            console.log("Found:", matches);
            let target = matches.find(m => m.includes('720') || m.includes('1080') || m.includes('v1.pinimg.com')) || matches[0];
            console.log("Downloading", target);
            
            const file = fs.createWriteStream("caminhao-video.mp4");
            https.get(target, response => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log("Success!");
                });
            });
        } else {
            console.log("No mp4 found. Trying different regex...");
            const altRegex = /"([^"]+\.mp4)"/g;
            let altMatches = data.match(altRegex);
            console.log("Alt:", altMatches);
        }
    });
}).on('error', err => console.log(err));
