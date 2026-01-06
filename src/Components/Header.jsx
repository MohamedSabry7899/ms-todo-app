export function Header({todos}) {

    const isPlural = todos.length !== 1
    const taskOrTasks = isPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1 className="text-gradient">You have {todos.length} open {taskOrTasks}</h1>
        </header>
    )
}