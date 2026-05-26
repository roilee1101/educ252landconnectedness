export default function LandConnectednessPage() {
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
            A photo and journal-based reflection on my visits to a place,
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
            Write a short introduction here. Explain where you went, why you
            chose this place, and what you hoped to notice or learn through your
            visits.
          </p>
        </div>
      </section>

      {/* VISIT ONE */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Visit One
          </p>
          <h2 className="mt-2 text-3xl font-bold">First Visit Title</h2>
          <p className="mt-2 text-stone-600">Date / Location / Weather</p>
        </div>

        {/* PHOTO GALLERY */}
        <div className="grid gap-6 md:grid-cols-3">
          <PhotoCard
            image="/images/visit1-photo1.jpg"
            title="Photo One"
            caption="Write a short caption for this photo."
          />
          <PhotoCard
            image="/images/visit1-photo2.jpg"
            title="Photo Two"
            caption="Write a short caption for this photo."
          />
          <PhotoCard
            image="/images/visit1-photo3.jpg"
            title="Photo Three"
            caption="Write a short caption for this photo."
          />
        </div>

        {/* JOURNAL */}
        <JournalSection
          title="Journal Reflection"
          text="Write your journal entry here. Describe what you saw, heard, smelled, felt, and thought while you were in the place. Try to include both outer observations and inner feelings."
        />

        {/* PROCESS NOTE */}
        <ProcessSection
          title="Process Note"
          text="Explain how you created your media response for this visit. For example, describe how you chose your photos, what you noticed while journaling, or how the place shaped your thinking."
        />
      </section>

      {/* VISIT TWO */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Visit Two
          </p>
          <h2 className="mt-2 text-3xl font-bold">Second Visit Title</h2>
          <p className="mt-2 text-stone-600">Date / Location / Weather</p>
        </div>

        {/* PHOTO GALLERY */}
        <div className="grid gap-6 md:grid-cols-3">
          <PhotoCard
            image="/images/visit2-photo1.jpg"
            title="Photo One"
            caption="Write a short caption for this photo."
          />
          <PhotoCard
            image="/images/visit2-photo2.jpg"
            title="Photo Two"
            caption="Write a short caption for this photo."
          />
          <PhotoCard
            image="/images/visit2-photo3.jpg"
            title="Photo Three"
            caption="Write a short caption for this photo."
          />
        </div>

        {/* JOURNAL */}
        <JournalSection
          title="Journal Reflection"
          text="Write your second journal entry here. Focus on what changed from the first visit. What did you notice this time that you missed before?"
        />

        {/* PROCESS NOTE */}
        <ProcessSection
          title="Process Note"
          text="Explain how your second visit felt different from the first. Describe your photo choices, writing process, and what you learned by returning to the same place."
        />
      </section>

      {/* FINAL REFLECTION */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Final Reflection</h2>

          <p className="mt-4 leading-8 text-stone-700">
            Write your final reflection here. Explain what both visits taught
            you about land connectedness, attention, place, and yourself.
          </p>
        </div>
      </section>
    </main>
  );
}

type PhotoCardProps = {
  image: string;
  title: string;
  caption: string;
};

function PhotoCard({ image, title, caption }: PhotoCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <img src={image} alt={title} className="h-64 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">{caption}</p>
      </div>
    </div>
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