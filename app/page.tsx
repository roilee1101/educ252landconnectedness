"use client";

import { useRef, useState, type ReactNode } from "react";

export default function LandConnectednessPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const showVisitTwo = false;
  const showFinalReflection = false;

  const playAudio = (audioPath: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioPath);
    audioRef.current = audio;
    audio.play();
  };

  const closeImage = () => {
    setSelectedImage(null);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* HERO SECTION */}
      <section className="bg-stone-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-300">
            Digital Journal
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Land Connectedness
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            A photo and journal-based reflection on my visits to a trail,
            focusing on attention, memory, observation, and relationship with
            the land.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Project Introduction</h2>

          <p className="mt-4 leading-8 text-stone-700">
            This is a website journal documenting my land connectedness project for EDUC 252. I visited a local trail to observe, reflect, and connect with the land.
            I took photos and wrote journal entries to capture my experience. 
            This project is about paying attention to the land, noticing details, and reflecting on my relationship with nature.

          </p>
        </div>
      </section>

      {/* VISIT ONE */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Visit One
          </p>

          <h2 className="mt-2 text-3xl font-bold">Rainy Trail</h2>

          <p className="mt-2 text-stone-600">May 26, 2026 / SFU Trail / Light Rain</p>
        </div>

        {/* TRAIL VIEW SECTION */}
        <GallerySection
          id="trail-gallery"
          label="Photo Group One"
          title="Entering: Trail Views"
          description="From the start to path down below, the trail shows me different views and aspects of the land. I can see the path, the trees, the sky, and the ground. These views allow me to enter the place and start noticing details and connections."
          photos={[
            {
              image: "/images/trail1.jpg",
              title: "Trail View One",
              caption: "Nice path down the trail. Sound of rain and birds of the nature, mixed with my own footstep on small rocks and leaves. Smell of trees and wet dirt allows me to feel the nature and the land.",
              audio: "/audio/trail1.mp3"
            },
            {
              image: "/images/trail2.jpg",
              title: "Trail View Two",
              caption: "Some are covered by trees, some are open. I can see the sky and clouds through the opening. The trail is a path that leads me into the land and allows me to explore different views and aspects of the place.",
            },
            {
              image: "/images/trail3.jpg",
              title: "Trail View Three",
              caption: "Trees cover me under its leaves so I can hide from the rain. Trees welcome anyone who needs a place to take shelter and allows me to take a break from the walk",
            },
          ]}
          setSelectedImage={setSelectedImage}
          playAudio={playAudio}
        />

        {/* TREE SECTION */}
        <GallerySection
          id="trees-gallery"
          label="Photo Group Two"
          title="Standing Memory: Trees"
          description="So many trees along the trail. I can see different types of trees, with different colors, shapes, and sizes. Trees are like standing memories of the land, witnessing the changes and seasons over time."
          photos={[
            {
              image: "/images/tree1.jpg",
              title: "Tree One",
              caption: "These trees are standing tall and strong, with their branches reaching out like arms. They create a canopy that shelters the trail and provides a home for birds and other creatures.",
            },
            {
              image: "/images/tree2.jpg",
              title: "Tree Two",
              caption: "This tree has a unique shape, with its trunk curving and twisting. It shows the resilience and adaptability of nature, bending but not breaking in the face of challenges.",
            },
            {
              image: "/images/tree3.jpg",
              title: "Tree Three",
              caption: "This tree is cut down, but its stump still stands as a reminder of the life that once was. It shows the cycle of life and death in nature, and how even in loss, there is still beauty and memory.",
            },
          ]}
          setSelectedImage={setSelectedImage}
        />

        {/* BIRD SECTION */}
        <GallerySection
          id="birds-gallery"
          label="Photo Group Three"
          title="Sound and Movement: Birds"
          description="Birds are everywhere along the trail, flying, singing, and moving around. They add sound and life to the place, creating a dynamic and lively atmosphere. "
          photos={[
            {
              image: "/images/bird1.jpg",
              title: "Bird One",
              caption: (
                <>
                  This bird is an <strong>American Robin</strong>, with its bright orange breast and cheerful song. 
                  It is a common sight along the trail, and its presence adds a sense of joy and liveliness to the place.
                </>
              ),
              audio: "/audio/birds1.mp3",
            },
            {
              image: "/images/bird2.jpg",
              title: "Bird Two",
              caption: (
                <>
                  This bird is a <strong>Pileated Woodpecker</strong>, with its distinctive black and white pattern and red crest. It was truly amazing to see it so close and hear its loud drumming on the tree.
                </>
              ),
          
            },
          ]}
          setSelectedImage={setSelectedImage}
          playAudio={playAudio}
        />

        {/* PLANT SECTION */}
        <GallerySection
          id="plants-gallery"
          label="Photo Group Four"
          title="Small Details: Plants"
          description="There were many small plants along the trail, growing on the ground, on the trees, and on the rocks. They add texture and color to the place, and they show the diversity and richness of life in nature."
          photos={[
            {
              image: "/images/plant1.jpg",
              title: "Plant One",
              caption: (
                <>
                  This is a <strong>Western Sword Fern</strong>, with its long and slender leaves that resemble swords. It grows in clusters along the trail, adding a lush and vibrant green color to the ground.
                </>
              ),
            },
            {
              image: "/images/plant2.jpg",
              title: "Plant Two",
              caption: (
                <>
                  This is a <strong>Creeping Buttercup</strong>, with its small and delicate yellow flowers. It grows low to the ground, creating a carpet of color and beauty along the trail.
                </>
              ),
            },
            {
              image: "/images/plant3.jpg",
              title: "Plant Three",
              caption: (
                <>
                  This is a <strong>Young Elderberry</strong>, with its small and delicate berries. It grows low to the ground, creating a carpet of color and beauty along the trail.
                </>
              ),
            },
          ]}
          setSelectedImage={setSelectedImage}
        />

        {/* JOURNAL */}
        <JournalSection
          title="Journal Reflection"
          text="The trail is a place of discovery and connection. As I walked, I felt a sense of calm and presence, surrounded by the sights, sounds, and smells of nature. The rain added a layer of intimacy and coziness to the experience, making me feel like I was in a secret world. I noticed the trees standing tall and strong, the birds singing and flying around, and the small details of plants and leaves. The trail allowed me to enter the land and connect with its beauty and complexity."
        />

        {/* PROCESS NOTE */}
        <ProcessSection
          title="Process Note"
          text="I chose these photos because they represent different aspects of the trail and my experience. The trail views show the overall atmosphere and environment, while the trees, birds, and plants highlight specific details and connections. I wanted to capture the diversity and richness of the place, as well as my personal reflections and feelings. The journal entry allowed me to articulate my thoughts and emotions about the visit."
        />
      </section>

      {/* VISIT TWO - TURNED OFF FOR NOW */}
      {showVisitTwo && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Visit Two
            </p>

            <h2 className="mt-2 text-3xl font-bold">Second Visit Title</h2>

            <p className="mt-2 text-stone-600">Date / Location / Weather</p>
          </div>

          <GallerySection
            id="visit-two-gallery"
            label="Visit Two Photos"
            title="Returning to the Place"
            description="Use this section later for photos from your second visit."
            photos={[
              {
                image: "/images/visit2-photo1.jpg",
                title: "Photo One",
                caption: "Write a short caption for this photo.",
              },
              {
                image: "/images/visit2-photo2.jpg",
                title: "Photo Two",
                caption: "Write a short caption for this photo.",
              },
              {
                image: "/images/visit2-photo3.jpg",
                title: "Photo Three",
                caption: "Write a short caption for this photo.",
              },
            ]}
            setSelectedImage={setSelectedImage}
          />

          <JournalSection
            title="Journal Reflection"
            text="Write your second journal entry here. Focus on what changed from the first visit. What did you notice this time that you missed before?"
          />

          <ProcessSection
            title="Process Note"
            text="Explain how your second visit felt different from the first. Describe your photo choices, writing process, and what you learned by returning to the same place."
          />
        </section>
      )}

      {/* FINAL REFLECTION - TURNED OFF FOR NOW */}
      {showFinalReflection && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Final Reflection</h2>

            <p className="mt-4 leading-8 text-stone-700">
              Write your final reflection here. Explain what both visits taught
              you about land connectedness, attention, place, and yourself.
            </p>
          </div>
        </section>
      )}

      {/* IMAGE LIGHTBOX / FULL SIZE VIEW */}
      {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeImage}
          >
            <button
              onClick={closeImage}
              className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xl font-bold text-black shadow-md hover:bg-stone-200"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Full size selected photo"
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        )}
    </main>
  );
}

type Photo = {
  image: string;
  title: string;
  caption: ReactNode;
  audio?: string;
};

type GallerySectionProps = {
  id: string;
  label: string;
  title: string;
  description: ReactNode;
  photos: Photo[];
  setSelectedImage: (image: string) => void;
  playAudio?: (audioPath: string) => void;
};

function GallerySection({
  id,
  label,
  title,
  description,
  photos,
  setSelectedImage,
  playAudio,
}: GallerySectionProps) {
  return (
    <section className="mb-12 rounded-2xl bg-white/70 p-6 shadow-sm">
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          {label}
        </p>

        <h3 className="mt-2 text-2xl font-semibold">{title}</h3>

        <p className="mt-3 leading-7 text-stone-600">{description}</p>
      </div>

      <div className="relative">
        <div
          id={id}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo) => (
            <PhotoCard
              key={photo.image}
              image={photo.image}
              title={photo.title}
              caption={photo.caption}
              onClick={() => {
                
                setSelectedImage(photo.image);

                if (photo.audio && playAudio) {
                  playAudio(photo.audio);
                }
              
              }}

              
            />
          ))}
        </div>

        <button
          onClick={() => {
            document
              .getElementById(id)
              ?.scrollBy({ left: -350, behavior: "smooth" });
          }}
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl shadow-md transition hover:scale-105 hover:bg-white"
          aria-label="Scroll left"
        >
          ‹
        </button>

        <button
          onClick={() => {
            document
              .getElementById(id)
              ?.scrollBy({ left: 350, behavior: "smooth" });
          }}
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl shadow-md transition hover:scale-105 hover:bg-white"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}

type PhotoCardProps = {
  image: string;
  title: string;
  caption: ReactNode;
  onClick: () => void;
};

function PhotoCard({ image, title, caption, onClick }: PhotoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[300px] cursor-pointer overflow-hidden rounded-2xl border-0 bg-white p-0 text-left shadow-sm outline-none transition hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-stone-300 md:min-w-[360px]"
    >
      <img src={image} alt={title} className="h-64 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-stone-600">{caption}</p>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
          Click to enlarge
        </p>
      </div>
    </button>
  );
}

type TextSectionProps = {
  title: string;
  text: string;
};

function JournalSection({ title, text }: TextSectionProps) {
  return (
    <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-8 text-stone-700">{text}</p>
    </div>
  );
}

function ProcessSection({ title, text }: TextSectionProps) {
  return (
    <div className="mt-6 rounded-2xl bg-amber-50 p-8 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 leading-8 text-stone-700">{text}</p>
    </div>
  );
}