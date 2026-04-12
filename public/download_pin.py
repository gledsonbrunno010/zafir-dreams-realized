import urllib.request
import re
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://pt.pinterest.com/pin/63754150969150538/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # find all mp4
    mp4s = list(set([m for m in re.findall(r'https://v1\.pinimg\.com/videos/mc/[^"\'\\]+\.mp4', html)]))
    if not mp4s:
        # try broader match
        mp4s = list(set([m for m in re.findall(r'https://[^"\'\\]+\.mp4', html)]))

    print("Found MP4s:", mp4s)
    if mp4s:
        # Try to find V_720P or similar, else just pick the first
        target = mp4s[0]
        for m in mp4s:
            if '720' in m or '1080' in m:
                target = m
        print("Downloading:", target)
        urllib.request.urlretrieve(target, "caminhao-video.mp4")
        print("Success! File saved as caminhao-video.mp4")
    else:
        print("No MP4 found in the HTML.")
except Exception as e:
    print("Error:", e)
