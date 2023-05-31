const posts = [
  {
    title: "Maize: Empowering NFT Creators with Simplified Loopring API Interactions",
    href: "https://www.cobmin.com/posts/Maize-Empowering-NFT-Creators",
    description:
      "In the fast-paced world of NFTs, efficient management and streamlined processes are crucial for creators seeking to maximize their impact.",
    date: "May 30, 2023",
    datetime: "2023-05-30",
    imageUrl:
      "https://www.cobmin.com/_next/image?url=%2Fassets%2Fblog%2FMaize-Empowering-NFT-Creators%2FCoverImage.jpg&w=1920&q=75",
    // readingTime: "6 min",
    author: {
      name: "cobmin",
      imageUrl: "https://www.cobmin.com/assets/blog/authors/cobmin.jpg",
    },
  },
  {
    title: "Efficient Batch Minting NFTs on Loopring",
    href: "https://www.cobmin.com/posts/Efficient-Batch-Minting-NFTs-on-Loopring",
    description:
      "In this tutorial, we will delve into the process of setting up and efficiently minting NFTs in batches on Loopring.",
    date: "May 10, 2023",
    datetime: "2023-05-10",
    imageUrl:
      "https://www.cobmin.com/_next/image?url=%2Fassets%2Fblog%2FEfficient-Batch-Minting-NFTs-on-Loopring%2FcoverNew.jpg&w=1920&q=75",
    // readingTime: "4 min",
    author: {
      name: "cobmin",
      imageUrl: "https://www.cobmin.com/assets/blog/authors/cobmin.jpg",
    },
  },
  {
    title: "Maize NFT Airdrop Competition",
    href: "https://www.cobmin.com/posts/Maize-Nft-Airdrop-Competition",
    description:
      "Maize is hosting an NFT airdrop competition throughout 2023. There are 39 opportunities to win. The top 3 wallet addresses of each month will win an NFT",
    date: "May 02, 2023",
    datetime: "2023-05-02",
    imageUrl:
      "https://www.cobmin.com/_next/image?url=%2Fassets%2Fblog%2FMaize-Nft-Airdrop-Competition%2FcoverNew.jpg&w=1920&q=75",
    // readingTime: "6 min", "https://mirror-media.imgix.net/publication-images/o_qvD7XIAPSjiqlvvodoj.png?height=512&width=1024&h=512&w=1024&auto=compress",

    author: {
      name: "cobmin",
      imageUrl: "https://www.cobmin.com/assets/blog/authors/cobmin.jpg",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="relative bg-neutral-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 dark:bg-neutral-900">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3 dark:bg-neutral-900" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Latest Maize blog posts
          </h2>
          <div className="mx-auto mt-3 max-w-2xl text-xl text-neutral-500 sm:mt-4 dark:text-neutral-300">
            View full blog 👉{" "}
            <a
              className="underline"
              href="https://www.cobmin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              cobmin.com
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-54 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  <div className="flex-1">
                    <div className="mt-2 block">
                      <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">
                        {post.title}
                      </div>
                      <div className="mt-3 text-base text-neutral-500 dark:text-neutral-300 line-clamp-3">
                        {post.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-[#25a237]">
                        {post.author.name}
                      </div>
                      <div className="flex space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                        <time dateTime={post.datetime}>{post.date}</time>
                        {/* <span aria-hidden="true">&middot;</span> */}
                        {/* <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
