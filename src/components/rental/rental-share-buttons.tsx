import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "next-share";

interface RentalShareButtonsProps {
  rentalSlug: string;
  rentalTitle: string;
}

export function RentalShareButtons({
  rentalSlug,
  rentalTitle,
}: RentalShareButtonsProps) {
  const shareUrl = `https://yetipm-frontend-xi.vercel.app/rentals/${rentalSlug}`;

  return (
    <div className="flex items-center space-x-4">
      <h4 className="text-sm font-medium text-white">Share this listing</h4>
      <div className="flex items-center space-x-3">
        <FacebookShareButton url={shareUrl} quote={rentalTitle}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={rentalTitle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
