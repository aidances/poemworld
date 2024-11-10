import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-600 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Funny Poems World</h1>
      
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">The Computer's Complaint</h2>
          <p className="whitespace-pre-line">
            My owner calls me names, you see,
            When programs crash repeatedly.
            But it's not my fault, I must confess,
            When users make a typing mess!
          </p>
        </div>

        <div className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">The Internet Cat</h2>
          <p className="whitespace-pre-line">
            I'm famous on the Internet,
            Though I've done nothing yet.
            Just sat and stared into space,
            Now millions know my face!
          </p>
        </div>

        <div className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">The Programmer's Debug</h2>
          <p className="whitespace-pre-line">
            99 bugs in the code on the screen,
            99 bugs in the code.
            Take one down, patch it around,
            127 bugs in the code on the screen!
          </p>
        </div>

        <div className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">The Social Media Blues</h2>
          <p className="whitespace-pre-line">
            I posted something really cool,
            But no one liked it (I'm a fool).
            Refreshed the page a thousand times,
            Still no likes - oh what a crime!
          </p>
        </div>

        <div className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">The Emoji Tale</h2>
          <p className="whitespace-pre-line">
            😀 met 😢 one day,
            Said "Why so blue? Come out to play!"
            😢 smiled and turned to 😊,
            Now they're friends eternally!
          </p>
        </div>
      </div>
    </div>
  );
}
