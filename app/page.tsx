"use client";

import { useRef, useState, type ReactNode } from "react";

export default function LandConnectednessPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const showVisitTwo = true;
  const showFinalReflection = true;

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
    setSelectedPhoto(null);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* HERO SECTION */}
      <section className="hero-section bg-stone-900 px-6 py-20 text-white">
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
          <h2 className="text-2xl font-semibold">Introduction</h2>

          <p className="mt-4 leading-8 text-stone-700">
            This is a website journal documenting my land connectedness project
            for EDUC 252. I visited a local trail on Simon Fraser University to observe, reflect, and
            connect with the land. I took photos, drew on paper, and wrote journal entries to
            capture my experience. This project is about paying attention to the
            land, noticing details, and reflecting on my relationship with
            nature.
          </p>
        </div>
      </section>

      {/* VISIT ONE */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Visit One
          </p>

          <h2 className="mt-2 text-3xl font-bold">Capturing the Land</h2>

          <p className="mt-2 text-stone-600">
            May 26, 2026 / SFU Trail / Light Rain
          </p>
        </div>

        {/* TRAIL VIEW SECTION */}
        <GallerySection
          id="trail-gallery"
          label="Photo Group One"
          title="Entering: Trail Views"
          description="From the start to the path down below, the trail shows me different views and aspects of the land. I can see the path, the trees, the sky, and the ground. These views allow me to enter the place and start noticing details and connections."
          photos={[
            {
              image: "/images/trail1.jpg",
              title: "Trail View One",
              caption:
                "Nice path down the trail. Sound of rain and birds of nature, mixed with my own footsteps on small rocks and leaves. Smell of trees and wet dirt allows me to feel the nature and the land.",
              audio: "/audio/trail1.mp3",
            },
            {
              image: "/images/trail2.jpg",
              title: "Trail View Two",
              caption:
                "Some are covered by trees, some are open. I can see the sky and clouds through the opening. The trail is a path that leads me into the land and allows me to explore different views and aspects of the place.",
            },
            {
              image: "/images/trail3.jpg",
              title: "Trail View Three",
              caption:
                "Trees cover me under their leaves so I can hide from the rain. Trees welcome anyone who needs a place to take shelter and allow me to take a break from the walk.",
            },
          ]}
          setSelectedPhoto={setSelectedPhoto}
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
              caption:
                "These trees are standing tall and strong, with their branches reaching out like arms. They create a canopy that shelters the trail and provides a home for birds and other creatures.",
            },
            {
              image: "/images/tree2.jpg",
              title: "Tree Two",
              caption:
                "This tree has a unique shape, with its trunk curving and twisting. It shows the resilience and adaptability of nature, bending but not breaking in the face of challenges.",
            },
            {
              image: "/images/tree3.jpg",
              title: "Tree Three",
              caption:
                "This tree is cut down, but its stump still stands as a reminder of the life that once was. It shows the cycle of life and death in nature, and how even in loss, there is still beauty and memory.",
            },
          ]}
          setSelectedPhoto={setSelectedPhoto}
        />

        {/* BIRD SECTION */}
        <GallerySection
          id="birds-gallery"
          label="Photo Group Three"
          title="Sound and Movement: Birds"
          description="Birds are everywhere along the trail, flying, singing, and moving around. They add sound and life to the place, creating a dynamic and lively atmosphere."
          photos={[
            {
              image: "/images/bird1.jpg",
              title: "Bird One",
              caption: (
                <>
                  This bird is an <strong>American Robin</strong>, with its
                  bright orange breast and cheerful song. It is a common sight
                  along the trail, and its presence adds a sense of joy and
                  liveliness to the place.
                </>
              ),
              audio: "/audio/birds1.mp3",
            },
            {
              image: "/images/bird2.jpg",
              title: "Bird Two",
              caption: (
                <>
                  This bird is a <strong>Pileated Woodpecker</strong>, with its
                  distinctive black and white pattern and red crest. It was
                  truly amazing to see it so close and hear its loud drumming on
                  the tree.
                </>
              ),
            },
          ]}
          setSelectedPhoto={setSelectedPhoto}
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
                  This is a <strong>Western Sword Fern</strong>, with its long
                  and slender leaves that resemble swords. It grows in clusters
                  along the trail, adding a lush, vibrant green to the
                  ground.
                </>
              ),
            },
            {
              image: "/images/plant2.jpg",
              title: "Plant Two",
              caption: (
                <>
                  This is a <strong>Creeping Buttercup</strong>, with its small
                  and delicate yellow flowers. It grows low to the ground,
                  creating a carpet of color and beauty along the trail.
                </>
              ),
            },
            {
              image: "/images/plant3.jpg",
              title: "Plant Three",
              caption: (
                <>
                  This is a <strong>Young Elderberry</strong>, with its small
                  and delicate berries. It grows low to the ground, creating a
                  carpet of color and beauty along the trail.
                </>
              ),
            },
          ]}
          setSelectedPhoto={setSelectedPhoto}
        />

        {/* JOURNAL */}
        <JournalSection
          title="Journal Reflection"
          text="While walking on the trail, I felt a deep sense of connection and awe towards the land. The rain added a layer of intimacy and coziness to the experience, making me feel like I was part of the natural world. I noticed the small details, like the sound of birds and the smell of wet earth, which made me appreciate the richness and beauty of nature. The trees stood as silent witnesses to the passage of time, while the birds brought life and movement to the place. The plants added color and texture, showing me the diversity and resilience of life in nature. Overall, this visit allowed me to slow down, pay attention, and connect with the land in a meaningful way."
        />

        {/* PROCESS NOTE */}
        <ProcessSection
          title="Process Note"
          text="When I woke up, I noticed light rain outside, which gave me the inspiration to walk on the trail in the rain. I wanted to experience the land with the sound of rain, the scent of wet earth, and the trail's quiet atmosphere. I used photos and sound to capture what I noticed during the visit."
        />
      </section>

      {/* VISIT TWO */}
      {showVisitTwo && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Visit Two
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Drawing the Place Slowly
            </h2>

            <p className="mt-2 text-stone-600">
              Jun 10, 2026 / SFU Trail / Cloudy and Light Rain
            </p>
          </div>

          <GallerySection
            id="visit-two-gallery"
            label="Visit Two Drawings & Writings"
            title="Drawing the Place Slowly"
            description={
              <>
                For my second visit, I used drawings to respond to the place
                more slowly. Drawing helped me stay with the details longer
                than taking a quick photo. One of the drawings also includes
                handwritten writing, so I added a transcript that appears beside
                the image when it is clicked.
              </>
            }
            photos={[
              {
                image: "/images/day2-drawing1.jpg",
                title: "Drawing of a Tree",
                caption:
                  "I drew this tree during my second visit. I looked at how the tree looks broken and cut down, but if looked closely it contains so much life and the tree is like a home to many plants and animals.",
                transcript: (
                  <>
                    <p>
                      <b>Home</b> <br></br>
                      From the surface, it looks broken and dead, but if looked very carefully, it shows an entire world of nature within it.
                      From the log, there are plants growing from top to bottom and all around it. It provides a firm foundation to grow and live on.
                      As the plants tangle and grow together, the Tree becomes their home. 
                    </p>
                  </>
                ),
              },
              {
                image: "/images/day2-drawing2.jpg",
                title: "Drawing of Plants",
                caption:
                  "This drawing includes two plants that I saw on the ground. I tried to draw the details of the plants as much as possible and used pencil and colors to show contrast and texture of it.",
                
              },
              {
                image: "/images/day2-drawing3.jpg",
                title: "In place writing",
                caption:
                  "On the trail, I sat down and wrote some of my thoughts and feelings about the place. I focused mainly on what I saw and heard.",
                transcript: (
                <>
                  <p>
                    <b>Nature, the welcoming home, beautiful Creation</b> <br></br>
                    I am back at the trail. It is lighly raining and the sky is cloudy. Air is filled with smell of fresh mist and wet dirt.
                    Because I have been here several times now, I am no more a stranger and this place is now familiar for me. Everytime I come, 
                    this place welcomes me, everytime I breath, it refreshes me, everytime I take a rest, it gives me all the tiem and the space that I need along with the 
                    symphony of birds mixed with smooth wind. I was afraid that I was going to get wet from the rain but there were trees covering me like a nature's 
                    umbrella. Now the rain is like a choir, leading the symphony with <i>Forte</i> of power. None of these discomforts (me), and none of them denies me.
                    This feels just like home. Safe space, comfortable place, wonderful place. A second home for me. <br></br><br></br>
                    More and more I think, more and more I become thankful to God, Creator of all things. Thank you God for providing me with another beautiful day to be amongst
                    the beautiful creation of yours, and allowing me this time to stop and reflect all these nature's wonders. I pray that, I don't take this as something granted,
                    but as a home, where I have to take care and live in harmony. In Jesus' name, Amen.
                  </p>
                </>
              ),
              },
            ]}
            setSelectedPhoto={setSelectedPhoto}
          />

          <JournalSection
            title="Journal Reflection"
            text="This time, I was more focused on drawing and writing instead of photos. Drawing allowed me to take more time to look at the details and really see what the "
          />

          <ProcessSection
            title="Process Note"
            text="Explain how you made the drawings. Describe where you sat, what you chose to draw, how long you spent observing, and why one drawing included writing. You can also explain how the transcript helps viewers understand the handwritten reflection."
          />
        </section>
      )}

      {/* FINAL REFLECTION */}
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

      {/* IMAGE LIGHTBOX / FULL SIZE VIEW WITH READABLE SIDE DESCRIPTION */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-stone-900 shadow-lg transition hover:scale-105 hover:bg-stone-100"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="grid max-h-[90vh] w-full max-w-6xl gap-6 overflow-y-auto rounded-3xl bg-stone-50 p-5 shadow-2xl md:grid-cols-[1.35fr_0.85fr]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* LEFT SIDE: IMAGE */}
            <div className="flex items-center justify-center rounded-2xl bg-white p-3 shadow-inner">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-xl"
              />
            </div>

            {/* RIGHT SIDE: DESCRIPTION */}
            <div className="max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-7 text-stone-900 shadow-md">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
                Selected Work
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-950">
                {selectedPhoto.title}
              </h2>

              <div className="mt-6 leading-8 text-stone-700">
                {selectedPhoto.caption}
              </div>

              {selectedPhoto.transcript && (
                <div className="mt-8 border-t border-stone-300 pt-6">
                  <h3 className="text-xl font-bold text-stone-950">Transcript</h3>

                  <div className="mt-4 leading-8 text-stone-700">
                    {selectedPhoto.transcript}
                  </div>
                </div>
              )}
            </div>
          </div>
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
  transcript?: ReactNode;
};

type GallerySectionProps = {
  id: string;
  label: string;
  title: string;
  description: ReactNode;
  photos: Photo[];
  setSelectedPhoto: (photo: Photo) => void;
  playAudio?: (audioPath: string) => void;
};

function GallerySection({
  id,
  label,
  title,
  description,
  photos,
  setSelectedPhoto,
  playAudio,
}: GallerySectionProps) {
  return (
    <section className="mb-12 rounded-2xl bg-emerald-950/90 p-6 shadow-sm">
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
          {label}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>

        <div className="mt-3 leading-8 text-stone-100">{description}</div>
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
              hasTranscript={Boolean(photo.transcript)}
              onClick={() => {
                setSelectedPhoto(photo);

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
  hasTranscript?: boolean;
  onClick: () => void;
};

function PhotoCard({
  image,
  title,
  caption,
  hasTranscript,
  onClick,
}: PhotoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[300px] cursor-pointer overflow-hidden rounded-2xl border-0 bg-white p-0 text-left shadow-sm outline-none transition hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-stone-300 md:min-w-[360px]"
    >
      <img src={image} alt={title} className="h-64 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="mt-2 text-sm leading-6 text-stone-600">
          {caption}
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
          {hasTranscript ? "Click to enlarge + read transcript" : "Click to enlarge"}
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