interface SkillsBoxProps {
  content: string[];
}

export default function SkillsBox({ content }: SkillsBoxProps) {
  return (
    <div>
      <ul className="p-2 bg-gray-100 flex flex-wrap gap-2">
        {content.map((skill, index) => (
          <li key={index} className="bg-gray-800 text-white p-1">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

