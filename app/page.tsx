import Chatbox from '@/components/Chatbox';

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Gemini Chatbox</h1>
      <Chatbox />
    </div>
  );
}