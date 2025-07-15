'use client';

type Props = {
  status: 'Idea' | 'Draft' | 'Published';
};

const statusColors = {
  Idea: 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-white',
  Draft: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white',
  Published: 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-white',
};

export default function StatusTag({ status }: Props) {
  return (
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[status]}`}
    >
      {status}
    </span>
  );
}
