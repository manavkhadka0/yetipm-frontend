import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  description: string;
  department: string;
}

export default function TeamMemberCard({
  name,
  title,
  image,
  description,
}: TeamMemberProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{name}</h3>
        <p className="text-gray-600 mb-4 font-medium">{title}</p>
        <p className="text-gray-500 text-sm mb-6 line-clamp-3">{description}</p>
        <button className="w-full bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
          View Bio
        </button>
      </div>
    </div>
  );
}
