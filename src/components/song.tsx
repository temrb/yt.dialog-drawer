'use client';
import { ExternalLink, Music } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import ShareSong from './dialog-modals/share-song';
import { DialogDrawer, ModalData } from './ui/dialog-drawer';
import { useToggleModal } from '@/hooks';
import { cn } from '@/lib/tw.utils';

const Song = ({ song }: { song: string }) => {
	const { activeModal, toggleModal } = useToggleModal();

	const modalContentMap: Record<string, ModalData> = {
		Share: {
			content: (
				<ShareSong song={song} onModalClose={() => toggleModal(null)} />
			),
			classValue: 'max-w-screen-sm',
		},
	};
	return (
		<>
			<main className='flex min-h-screen flex-col items-center justify-center space-y-4'>
				<div className='flex flex-row items-center space-x-2'>
					<Music size={16} />
					<p className='font-mono italic'>{song}</p>
				</div>
				<Button
					onClick={() => toggleModal('Share')}
					variant='secondary'
				>
					<span className='flex flex-row items-center space-x-2'>
						<ExternalLink size={16} />
						<p>Share</p>
					</span>
				</Button>
			</main>
			<DialogDrawer
				className={`w-full p-4 ${
					activeModal
						? cn(modalContentMap[activeModal]?.classValue)
						: ''
				}`}
				showModal={!!activeModal}
				setShowModal={() => toggleModal(null)}
			>
				{activeModal && modalContentMap[activeModal]?.content}
			</DialogDrawer>
		</>
	);
};

export default Song;
