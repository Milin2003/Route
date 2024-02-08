
function Content({ title }) {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold mb-2'>{title}</h1>
      <p className="font-semibold">This is the {title} page content.</p>
    </div>
  );
}

export default Content;
