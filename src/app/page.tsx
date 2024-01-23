import Song from '@/components/song';
import { data } from '@/data/faker';

export default function Home() {
	const song = data.randomSong as string;
	return <Song song={song} />;
}
