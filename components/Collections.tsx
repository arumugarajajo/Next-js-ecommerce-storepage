import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div
                className="rounded-lg cursor-pointer object-cover w-full h-full"
                style={{ width: "300px", height: "150px" }}
              >
                <Image
                  key={collection._id}
                  src={collection.image}
                  alt={collection.title}
                  width={300}
                  height={150}
                  layout="fixed"
                  className="rounded-lg cursor-pointer object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
