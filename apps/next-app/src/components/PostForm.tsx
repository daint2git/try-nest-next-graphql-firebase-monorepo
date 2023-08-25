import { FormEventHandler, useRef } from "react";

type Props = {
  onSubmit(data: { title: string; description: string }): void;
};

function PostForm({ onSubmit }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const titleValue = titleRef.current?.value;
    const descriptionValue = descriptionRef.current?.value;

    if (titleValue && descriptionValue) {
      onSubmit({
        title: titleValue,
        description: descriptionValue,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[500px]">
      <label>title</label>
      <input
        type="text"
        ref={titleRef}
        className="input input-bordered w-full max-w"
      />
      <br />
      <label>description</label>
      <input
        type="text"
        ref={descriptionRef}
        className="input input-bordered w-full max-w"
      />
      <br />
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
}

export default PostForm;
