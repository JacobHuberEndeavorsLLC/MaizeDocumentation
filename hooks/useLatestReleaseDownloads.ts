import { useState, useEffect } from 'react';

interface Asset {
    name: string;
    browser_download_url: string;
}

interface Downloads {
    osx: string;
    windows: string;
}

const useLatestReleaseDownloads = (): Downloads | undefined => {
    const [downloads, setDownloads] = useState<Downloads>();

    useEffect(() => {
        fetch('https://api.github.com/repos/cobmin/maize/releases')
            .then((res) => res.json())
            .then((releases) => {
                if (releases.length > 0) {
                    const assets: Asset[] = releases[0].assets;
                    const osxDownload = assets.find((asset) => asset.name === 'osx-x64.zip')?.browser_download_url;
                    const windowsDownload = assets.find((asset) => asset.name === 'win-x64.zip')?.browser_download_url;

                    if (osxDownload && windowsDownload) {
                        setDownloads({ osx: osxDownload, windows: windowsDownload });
                    }
                }
            })
            .catch(console.error);
    }, []);

    return downloads;
};

export default useLatestReleaseDownloads;
