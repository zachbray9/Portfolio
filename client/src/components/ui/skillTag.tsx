import { ReactNode } from "react"

interface Props{
    label: string
    icon: ReactNode | string
    skillType: 'frontend' | 'backend' | 'testing/deployment'
    className?: string
}

export default function SkillTag({label, icon, skillType, className} : Props) {
    return (
        <div className={`flex items-center space-x-2 py-1 px-4 rounded-full ${colorStyles.get(skillType)} ${className}`}>
      {/* Check if icon is a string (image URL) or a component */}
      {typeof icon === 'string' ? (
        <img src={icon} alt={`${label} icon`} className="w-6 h-6" />
      ) : (
        <span className="text-2xl">{icon}</span>
      )}
      <span className="text-sm font-medium">{label}</span>
    </div>
    )
}

const colorStyles = new Map<string, string>([
    ['frontend', 'bg-cyan-100 text-teal-700 border border-cyan-300 dark:bg-teal-700 dark:text-cyan-100 dark:border-teal-500'],
    ['backend', 'bg-green-100 text-green-800 border border-green-300 dark:bg-green-700 dark:text-green-100 dark:border-green-500'],
    ['testing/deployment', 'bg-yellow-100 text-orange-700 border border-yellow-300 dark:bg-orange-700 dark:text-yellow-100 dark:border-orange-500']
])