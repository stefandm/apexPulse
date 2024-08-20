const Paragraph = () => {
  return (
    <section
      className='relative bg-white h-[35vh] md:h-[20vh] pointer-events-none select-none'
      id='paragraph'
      aria-label='Information paragraph section'
    >
      <article
        className="px-10 absolute top-[-1em] left-[50%] -translate-x-1/2 w-[90vw] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-gradient-to-b from-sky-100 to-white flex flex-col items-center"
        aria-label='Paragraph content container'
      >
        <h1
          className='font-oswald bg-opacity-70 text-xl md:text-4xl font-light p-4 my-4 py-10 text-center'
          aria-label='Inspirational gym training message'
        >
          Whether you&apos;re a teenager, a senior, or anywhere in between, our gym offers training for all skill levels, helping you learn, grow, and thrive at your own pace—because greatness is within reach for everyone!
        </h1>
      </article>
    </section>
  );
}

export default Paragraph;
