// import {
//   CloudArrowUpIcon,
//   LockClosedIcon,
//   ServerIcon,
// } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
  {
    name: "SSL certificates.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
  {
    name: "Database backups.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
];

export default function Content1({
  backgroundColor,
  image,
  subtitle,
  title,
  text,
}) {
  return (
    <div className={`${backgroundColor} overflow-hidden py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className=" font-semibold leading-7 text-primary-default">
                {subtitle}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-typo-primary sm:text-4xl">
                {title}
              </p>
              <p className="mt-6 text-lg leading-8 text-typo-secondary">
                {text}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-primary-default">
                      {/* <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      /> */}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-typo-secondary">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={image}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
