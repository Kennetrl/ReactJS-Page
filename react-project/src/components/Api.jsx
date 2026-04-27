import { useState, useEffect } from 'react'
import Button from './Button'
import Dashboard from './Dashboard'

function Api({ onBack }) {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/demonslayer-api/api/v1/characters?limit=8')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        setCharacters(data.content ?? [])
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load characters. Please try again later.')
        setLoading(false)
      })
  }, [])

  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  if (selected) {
    return <Dashboard character={selected} onBack={() => setSelected(null)} />
  }

  return (
    <div className="p-4">
      <Button onClick={onBack}>← Back</Button>
      <h2 className="text-2xl font-semibold mt-3 mb-4 text-center">Demon Slayer Characters</h2>

      <div className="flex flex-row items-center justify-center gap-2 mb-5 flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 rounded px-3 py-1.5 text-base min-w-[200px]"
        />
        <Button onClick={() => setSearch('')}>Clear</Button>
      </div>

      {loading && <p className="text-center">Loading characters...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {filtered.map((character) => (
          <div
            key={character.id}
            className="w-56 border border-gray-300 rounded p-3 box-border flex flex-col gap-2"
          >
            {character.img && (
              <img
                src={character.img}
                alt={character.name}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <h2 className="m-0 text-base font-semibold">{character.name}</h2>
            <p className="m-0 text-sm flex-grow">
              {character.description
                ? character.description.slice(0, 100) + (character.description.length > 100 ? '...' : '')
                : character.affiliation ?? 'No description available'}
            </p>
            <Button onClick={() => setSelected(character)}>More Info</Button>
          </div>
        ))}

        {!loading && !error && filtered.length === 0 && (
          <p>No characters found for "{search}"</p>
        )}
      </div>
    </div>
  )
}

export default Api
