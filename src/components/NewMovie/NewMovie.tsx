import { useState } from 'react';
import { TextField } from '../TextField';

type Movie = {
  title: string;
  description?: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie: Movie = {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    onAdd(newMovie);

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  const isDisabled =
    !title.trim() ||
    !imgUrl.trim() ||
    !imdbUrl.trim() ||
    !imdbId.trim();

  return (
    <form className="NewMovie" onSubmit={handleSubmit}>
      <TextField value={title} onChange={setTitle} label="Title" />
      <TextField value={description} onChange={setDescription} label="Description"/>
      <TextField value={imgUrl} onChange={setImgUrl} label="Image URL" />
      <TextField value={imdbUrl} onChange={setImdbUrl} label="IMDB URL" />
      <TextField value={imdbId} onChange={setImdbId} label="IMDB ID" />

      <button
        type="submit"
        data-cy="submit-button"
        className="button is-link"
        disabled={isDisabled}
      >
        Add
      </button>
    </form>
  );
};
