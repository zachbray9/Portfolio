import { ReactNode } from "react"

interface Props {
  label: string
  icon: ReactNode | string
  skillType: 'frontend' | 'backend' | 'cloud/version control' | 'other'
}

export default function SkillTag({ label, icon, skillType }: Props) {
  return (
    <div className={`flex items-center space-x-2 py-2 px-3 rounded-full ${colorStyles.get(skillType)}`}>
      {/* Check if icon is a string (image URL) or a component */}
      {typeof icon === 'string' ? (
        <img src={icon} alt={`${label} icon`} className="w-6 h-6" />
      ) : (
        <span className="flex items-center justify-center text-xl w-6 h-6">{icon}</span>
      )}
      <span className="text-sm">{label}</span>
    </div>
  )
}

const colorStyles = new Map<string, string>([
  ['frontend', 'bg-sky-200 text-sky-800 border border-sky-300 dark:bg-sky-500 dark:text-sky-100 dark:border-sky-400'],
  ['backend', 'bg-green-200 text-green-900 border border-green-300 dark:bg-green-700 dark:text-green-200 dark:border-green-500'],
  ['cloud/version control', 'bg-yellow-200 text-yellow-900 border border-yellow-300 dark:bg-yellow-700 dark:text-yellow-200 dark:border-yellow-500'],
  ['other', 'bg-gray-200 text-gray-900 border border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500']
])