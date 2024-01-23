import { Clipboard, ClipboardCheck, Music } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';

interface Props {
	song: string;
	onModalClose: () => void;
}

const ShareSong = (props: Props) => {
	const { song, onModalClose } = props;
	const [copied, setCopied] = useState(false);

	return (
		<div className='flex flex-col space-y-10'>
			<div className='flex flex-col'>
				<h1 className='pb-4 text-center text-2xl font-semibold tracking-wider'>
					Share Song
				</h1>
				<span className='flex flex-row items-center justify-center space-x-4 border-t-2 border-accent pt-4'>
					<Music size={16} />
					<p className='font-mono italic'>{song}</p>
				</span>
			</div>
			<div className='flex justify-center'>
				<Button
					onClick={() => {
						navigator.clipboard.writeText(song);
						setCopied(true);
						setTimeout(() => {
							setCopied(false);
							onModalClose();
						}, 2000);
					}}
					disabled={copied}
					variant={copied ? 'default' : 'outline'}
				>
					<span className='flex flex-row items-center space-x-2'>
						{copied ? (
							<>
								<p>Copied!</p>
								<ClipboardCheck size={16} />
							</>
						) : (
							<>
								<p>Copy</p>
								<Clipboard size={16} />
							</>
						)}
					</span>
				</Button>
			</div>
		</div>
	);
};

export default ShareSong;
