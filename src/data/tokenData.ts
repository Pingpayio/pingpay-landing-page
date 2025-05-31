import { TokenInfo } from '@/types/token';

// All tokens in the carousel including the newly added ones
export const allTokens: TokenInfo[] = [
  // Keeping all tokens except coin1 (Bitcoin), coin15 & coin21 (Doge variants), coin22 (XRP), coin23 (Zcash)
  { id: "coin2", imagePath: "/lovable-uploads/6d4ff297-c8d2-4651-9da4-14185bef8a7f.png" },
  { id: "coin3", imagePath: "/lovable-uploads/2dd79dd2-c23f-4f1e-b1bd-73afcae0ea29.png" },
  { id: "coin5", imagePath: "/lovable-uploads/abef287a-5b0e-4e3d-9328-d41f5096d7a3.png" },
  { id: "coin6", imagePath: "/lovable-uploads/2b3aa215-b6e5-4c4b-8514-f0d3106135cd.png" },
  { id: "coin7", imagePath: "/lovable-uploads/34df4987-58fd-4221-a4b5-52f3acc57d2a.png" },
  { id: "coin9", imagePath: "/lovable-uploads/0eeaec2e-d7af-42fe-b6f2-8956118e5523.png" },
  { id: "coin10", imagePath: "/lovable-uploads/0833e98a-f70e-46ef-b6ce-1a04dff38d0f.png" },
  { id: "coin11", imagePath: "/lovable-uploads/3487923f-3750-4d2d-9729-3093d309d810.png" },
  { id: "coin12", imagePath: "/lovable-uploads/c0f0f9f5-318d-4cf4-b6ee-1d864a05d9a5.png" },
  { id: "coin13", imagePath: "/lovable-uploads/30212935-4627-41da-88eb-c62982a9dffe.png" },
  { id: "coin14", imagePath: "/lovable-uploads/5b60922e-f63b-4e8f-a95e-e584727f8b0a.png" },
  { id: "coin16", imagePath: "/lovable-uploads/a6debefc-797f-4e48-92d8-6bff8224cae6.png" }, 
  { id: "coin17", imagePath: "/lovable-uploads/19b83477-b528-4649-9821-dbd84fbcf0c0.png" }, 
  { id: "coin18", imagePath: "/lovable-uploads/6443065c-4ef1-4166-858a-0b3a3d16152f.png" }, 
  { id: "coin19", imagePath: "/lovable-uploads/f3b935de-e4db-4807-b3fc-c84ba81f8d95.png" }, 
  { id: "coin20", imagePath: "/lovable-uploads/5248b9e5-d6ed-4e1a-a022-e0ee1aa4e09f.png" },
  
  // New tokens (21-25)
  { id: "coin21", imagePath: "/lovable-uploads/e10bd96a-f18d-453d-b0c2-c10c6be2acab.png" }, // Bitcoin
  { id: "coin22", imagePath: "/lovable-uploads/57242641-6e28-43f1-91f4-f89a14f5a542.png" }, // Dogecoin
  { id: "coin23", imagePath: "/lovable-uploads/182bab75-9b47-486e-8168-22930daa126b.png" }, // Dog with beanie
  { id: "coin24", imagePath: "/lovable-uploads/80bc3638-fe34-4beb-91cf-38dfb4fc5675.png" }, // XRP
  { id: "coin25", imagePath: "/lovable-uploads/3049042d-ef07-481b-a092-de754d0bb226.png" }, // Zcash
  
  // New tokens (26-29) - the uploaded images
  { id: "coin26", imagePath: "/lovable-uploads/7c13116c-9490-4e23-b01a-f1f6c15a39cc.png" }, // Blue water drop token
  { id: "coin27", imagePath: "/lovable-uploads/3a324cee-7e8b-416e-b42b-8c74e2884b0c.png" }, // Red diamond token
  { id: "coin28", imagePath: "/lovable-uploads/d90a8cf3-449d-41f2-a242-0bccc983fe78.png" }, // Yellow Binance-style token
  { id: "coin29", imagePath: "/lovable-uploads/ff6912ad-9961-42d7-8287-200f97af5c14.png" }, // Green triangle token
];
