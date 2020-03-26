import React, { useContext } from 'react';
import Image from '../components/Image';
import { getClass } from '../utils';
import { PicsContext } from '../PicsContext';

function Photos() {
  const { photos } = useContext(PicsContext);
  const photoDisplay = photos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{photoDisplay}</main>;
}

export default Photos;
