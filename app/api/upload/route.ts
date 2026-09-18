import { NextRequest, NextResponse } from "next/server";
import { cloudinary } from "../../lib/cloudinary";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json(
      { error: "No se recibió ningún archivo" },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "video", folder: "tarjetas-plataforma" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });

  return NextResponse.json({
    videoUrl: result.secure_url,
    thumbnailUrl: result.secure_url.replace(/\.[^/.]+$/, ".jpg"),
  });
}