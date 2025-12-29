import React from 'react';
import { 
    FOX_NEWS_URL, 
    VIRAL_TWEET_URL,
    ELON_MUSK_URL,
    TIFFANY_FONG_URL,
    KENNY_ROGERS_URL,
    SMB_ATTORNEY_URL,
    MCMAHON_URL,
    COMMUNITY_URL
} from '../constants';
import { ExternalLink, Eye, Heart, FolderOpen, Fingerprint } from 'lucide-react';

const TweetCard: React.FC<{ 
    author: string; 
    handle: string; 
    desc: string; 
    views: string; 
    url: string; 
    rotate?: string;
    color?: string;
}> = ({ author, handle, desc, views, url, rotate = '0deg', color = 'border-gray-600' }) => (
    <a 
        href={url} 
        target="_blank" 
        rel="noreferrer"
        className={`block bg-[#222] p-4 border-l-4 ${color} shadow-lg hover:bg-[#333] transition-all cursor-pointer group`}
        style={{ transform: `rotate(${rotate})` }}
    >
        <div className="flex justify-between items-start mb-3 border-b border-gray-700 pb-2">
            <div>
                <div className="font-bold font-news text-gray-100 uppercase tracking-wide group-hover:text-caution transition-colors">{author}</div>
                <div className="text-xs text-gray-500 font-mono">{handle}</div>
            </div>
            <ExternalLink size={16} className="text-gray-500 group-hover:text-white" />
        </div>
        <p className="font-mono text-sm mb-4 text-gray-300 italic leading-relaxed">"{desc}"</p>
        <div className="flex gap-4 text-xs font-bold text-gray-500 font-mono">
            <span className="flex items-center gap-1"><Eye size={12}/> {views}</span>
            <span className="flex items-center gap-1 text-red-500">EVIDENCE #{(Math.random() * 1000).toFixed(0)}</span>
        </div>
    </a>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative">
      
      {/* Background Folder Tab Effect */}
      <div className="absolute top-0 left-10 w-32 h-8 bg-caution rounded-t-lg -mt-8 z-0"></div>
      
      <div className="bg-[#1a1a1a] border border-gray-800 p-8 md:p-12 relative z-10 shadow-2xl rounded-tr-3xl">
          
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-caution font-mono text-sm border border-caution/30 px-3 py-1 rounded-full">
                    <Fingerprint size={16} /> CASE FILE: 2025-MN-FRAUD
                </div>
                <h2 className="text-5xl md:text-7xl font-news text-white uppercase leading-none">
                    THE <span className="text-red-600">ALLEGATIONS</span>
                </h2>
                <div className="h-1 w-24 bg-red-600"></div>
                <p className="font-comic text-xl text-gray-300 leading-relaxed">
                    Federal agents claim millions in subsidies have vanished. They say the daycare is a front. 
                    <span className="text-white font-bold bg-red-900/30 px-1 mx-1">We say: It's just a chill daycare.</span> 
                    The media is in a frenzy. The timeline is exploding.
                </p>
            </div>

            <div className="w-full md:w-1/3 bg-black border border-gray-700 p-6 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                    <FolderOpen className="text-gray-700" size={64} />
                </div>
                <h3 className="font-news text-2xl text-white mb-4 uppercase">OFFICIAL STATEMENT</h3>
                <p className="font-mono text-xs text-green-500 mb-4">
                    &gt; ENCRYPTED TRANSMISSION<br/>
                    &gt; SENDER: UNKNOWN<br/>
                    &gt; STATUS: CHILL
                </p>
                <p className="font-mono text-gray-400 text-sm">
                    "$DAYCARE token is a decentralized meme asset. We deny all allegations of fraud. We are simply providing digital nutrition to the blockchain."
                </p>
            </div>
          </div>

          {/* The Evidence Grid */}
          <div className="relative border-t border-gray-800 pt-12">
              <h2 className="text-center text-3xl font-news text-gray-500 mb-12 flex justify-center items-center gap-4 uppercase tracking-widest">
                — Evidence Log —
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <TweetCard 
                    author="Elon Musk" 
                    handle="@elonmusk" 
                    desc="Interesting."
                    views="42.5M"
                    url={ELON_MUSK_URL}
                    color="border-blue-500"
                  />

                  <TweetCard 
                    author="Tiffany Fong" 
                    handle="@TiffanyFong" 
                    desc="Breaking: Massive fraud allegations surfacing..."
                    views="2.1M"
                    url={TIFFANY_FONG_URL}
                    color="border-pink-500"
                  />

                  <TweetCard 
                    author="Nick Shirley" 
                    handle="@nickshirleyy" 
                    desc="The viral video that started it all. Feds launching massive investigation."
                    views="15M"
                    url={VIRAL_TWEET_URL}
                    color="border-red-500"
                  />

                  <TweetCard 
                    author="SMB Attorney" 
                    handle="@SMB_Attorney" 
                    desc="The legal implications here are unprecedented."
                    views="850K"
                    url={SMB_ATTORNEY_URL}
                    color="border-yellow-500"
                  />

                  <TweetCard 
                    author="Not Kenny Rogers" 
                    handle="@NotKennyRogers" 
                    desc="You gotta see this."
                    views="1.5M"
                    url={KENNY_ROGERS_URL}
                    color="border-purple-500"
                  />

                  <TweetCard 
                    author="Sec. McMahon" 
                    handle="@EDSecMcMahon" 
                    desc="Department of Education is looking into this."
                    views="3.2M"
                    url={MCMAHON_URL}
                    color="border-green-500"
                  />

              </div>

              <div className="text-center mt-16">
                <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-black text-xl font-news uppercase tracking-widest px-10 py-4 border-4 border-black hover:bg-caution transition-colors">
                    <FolderOpen /> ACCESS FULL FILES
                </a>
              </div>
          </div>
      </div>

    </section>
  );
};

export default About;