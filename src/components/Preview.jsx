function Preview(props) {
  return (
    <div class="w-full md:w-1/2 h-full bg-white">
      <iframe
        class="w-full h-full border-none"
        srcDoc={props.code}
        sandbox=""
      />
    </div>
  );
}

export default Preview;