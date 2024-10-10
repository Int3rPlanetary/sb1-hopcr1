import React, { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // In a real application, you would fetch news from an API
    const fetchNews = async () => {
      // Simulated API response
      const mockNews: NewsItem[] = [
        {
          id: 1,
          title: "Ethereum 2.0 Launch Date Announced",
          summary: "The long-awaited Ethereum 2.0 upgrade has finally received an official launch date.",
          url: "https://example.com/ethereum-2-launch",
          imageUrl: "https://source.unsplash.com/random/800x600?blockchain",
          publishedAt: "2023-05-15T09:00:00Z"
        },
        {
          id: 2,
          title: "New DeFi Protocol Gains Traction",
          summary: "A revolutionary DeFi protocol has seen exponential growth in total value locked over the past week.",
          url: "https://example.com/defi-protocol-growth",
          imageUrl: "https://source.unsplash.com/random/800x600?finance",
          publishedAt: "2023-05-14T14:30:00Z"
        },
        {
          id: 3,
          title: "Major Bank Adopts Cryptocurrency",
          summary: "One of the world's largest banks announces plans to offer cryptocurrency services to its clients.",
          url: "https://example.com/bank-adopts-crypto",
          imageUrl: "https://source.unsplash.com/random/800x600?bank",
          publishedAt: "2023-05-13T11:15:00Z"
        }
      ];
      setNews(mockNews);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Crypto News</h1>
      <div className="space-y-8">
        {news.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.summary}</p>
              <div className="flex justify-between items-center">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Read more</a>
                <span className="text-gray-400 text-sm">{new Date(item.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;