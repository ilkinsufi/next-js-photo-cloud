"use client";

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Qalereya</h1>
        <Button asChild>
          <CldUploadButton
            onUpload={(result: UploadResult) => {
              //   setImageId(result.info.public_id);
            }}
            uploadPreset="x11bb6xc"
           



          />
        </Button>
      </div>
    </section>
  );
}
