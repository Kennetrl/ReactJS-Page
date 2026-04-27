import Button from './Button'

const SKIP_FIELDS = new Set(['id', 'img', 'name'])

function formatKey(key) {
  return key
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim()
}

function Dashboard({ character, onBack }) {
  const extraFields = Object.entries(character).filter(
    ([key, value]) => !SKIP_FIELDS.has(key) && value !== null && value !== undefined && value !== ''
  )

  return (
    <div className="max-w-3xl mx-auto text-left p-4">
      <Button onClick={onBack}>← Back</Button>

      <div className="flex flex-wrap gap-6 mt-4 items-start">
        {character.img && (
          <img
            src={character.img}
            alt={character.name}
            className="w-56 flex-shrink-0 border border-gray-300 rounded"
          />
        )}

        <div className="flex-1 min-w-[220px]">
          <h1 className="mt-0 text-3xl font-semibold">{character.name}</h1>

          {extraFields.map(([key, value]) => (
            <p key={key} className="my-1">
              <strong>{formatKey(key)}:</strong>{' '}
              {Array.isArray(value) ? value.join(', ') : String(value)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
