const mockUrls = [
  "https://utfs.io/f/fae5de45-5c6a-4a76-aece-be6af69f5d89-qst08v.png",
  "https://utfs.io/f/10a99ed9-26c2-4209-856f-a1aaa5140e98-oyw7jz.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image?.id} className="w-48">
            <img src={image?.url} alt="image" />
          </div>
        ))}
      </div>
      Hello there
    </main>
  );
}
