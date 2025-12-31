import { useState, useEffect } from 'react'
import { 
  PlusIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Notes() {
  // Load notes from localStorage on mount
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('dashify-notes')
    if (savedNotes) {
      try {
        return JSON.parse(savedNotes)
      } catch {
        return [{ id: 1, title: 'arp', content: 'hello' }]
      }
    }
    return [{ id: 1, title: 'arp', content: 'hello' }]
  })
  
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [searchQuery, setSearchQuery] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editNote, setEditNote] = useState({ title: '', content: '' })
  const { logout } = useAuth()

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('dashify-notes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = () => {
    if (newNote.title.trim() || newNote.content.trim()) {
      const note = {
        id: Date.now(),
        title: newNote.title || 'Untitled',
        content: newNote.content,
        createdAt: new Date().toISOString(),
      }
      const updatedNotes = [note, ...notes]
      setNotes(updatedNotes)
      setNewNote({ title: '', content: '' })
    }
  }

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const handleStartEdit = (note) => {
    setEditingId(note.id)
    setEditNote({ title: note.title, content: note.content })
  }

  const handleSaveEdit = () => {
    if (editingId) {
      setNotes(notes.map(note => 
        note.id === editingId 
          ? { ...note, title: editNote.title || 'Untitled', content: editNote.content }
          : note
      ))
      setEditingId(null)
      setEditNote({ title: '', content: '' })
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditNote({ title: '', content: '' })
  }

  const handleLogout = () => {
    logout()
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const noteColors = [
    'from-blue-500 via-cyan-500 to-teal-500',
    'from-purple-500 via-pink-500 to-rose-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-green-500 via-emerald-500 to-teal-500',
    'from-indigo-500 via-blue-500 to-cyan-500',
    'from-pink-500 via-rose-500 to-red-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-teal-500 via-cyan-500 to-blue-500',
    'from-violet-500 via-purple-500 to-fuchsia-500',
    'from-emerald-500 via-green-500 to-teal-500',
  ]

  const getNoteColor = (index) => {
    return noteColors[index % noteColors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-blue-600">My</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Notes
            </span>
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2 hover-lift"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - New Note Form */}
          <div className="lg:col-span-1 space-y-6 animate-slide-up">
            <Card className="p-6 hover-lift shadow-lg border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl animate-bounce">✨</span>
                New Note
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="note-title"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Title
                  </label>
                  <input
                    id="note-title"
                    type="text"
                    value={newNote.title}
                    onChange={(e) =>
                      setNewNote({ ...newNote, title: e.target.value })
                    }
                    placeholder="Enter note title..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400 hover:border-blue-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="note-content"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Content
                  </label>
                  <textarea
                    id="note-content"
                    value={newNote.content}
                    onChange={(e) =>
                      setNewNote({ ...newNote, content: e.target.value })
                    }
                    placeholder="Write your note here..."
                    rows={8}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white text-slate-900 placeholder:text-slate-400 hover:border-blue-300"
                  />
                </div>

                <Button
                  onClick={handleAddNote}
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 hover-lift animate-pulse-button"
                >
                  <PlusIcon className="h-5 w-5" />
                  Add Note
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Notes List */}
          <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Search Bar */}
            <Card className="p-4 hover-lift shadow-lg border-2 border-indigo-100">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 animate-pulse" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search notes..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400 hover:border-blue-300"
                />
              </div>
            </Card>

            {/* Notes Grid */}
            {filteredNotes.length === 0 ? (
              <Card className="p-12 text-center hover-lift">
                <div className="text-6xl mb-4 animate-bounce">📝</div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {searchQuery ? 'No notes found' : 'No notes yet'}
                </h3>
                <p className="text-slate-500">
                  {searchQuery
                    ? 'Try a different search term'
                    : 'Create your first note to get started!'}
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNotes.map((note, index) => (
                  <Card
                    key={note.id}
                    className={`p-6 bg-gradient-to-br ${getNoteColor(
                      index
                    )} text-white hover-lift relative group animate-fade-in shadow-xl border-2 border-white/20`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {editingId === note.id ? (
                        <>
                          <button
                            onClick={handleSaveEdit}
                            className="p-2 bg-green-500/80 hover:bg-green-500 rounded-lg backdrop-blur-sm transition-all hover:scale-110 animate-pulse"
                            aria-label="Save note"
                          >
                            <CheckIcon className="h-4 w-4 text-white" />
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="p-2 bg-red-500/80 hover:bg-red-500 rounded-lg backdrop-blur-sm transition-all hover:scale-110"
                            aria-label="Cancel edit"
                          >
                            <XMarkIcon className="h-4 w-4 text-white" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleStartEdit(note)}
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all hover:scale-110 hover:rotate-12"
                            aria-label="Edit note"
                          >
                            <PencilIcon className="h-5 w-5 text-white" />
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all hover:scale-110 hover:rotate-12"
                            aria-label="Delete note"
                          >
                            <TrashIcon className="h-5 w-5 text-white" />
                          </button>
                        </>
                      )}
                    </div>

                    {editingId === note.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={editNote.title}
                          onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50 font-bold text-lg"
                          placeholder="Note title"
                        />
                        <textarea
                          value={editNote.content}
                          onChange={(e) => setEditNote({ ...editNote, content: e.target.value })}
                          rows={6}
                          className="w-full px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                          placeholder="Note content"
                        />
                      </div>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold mb-3 pr-16 break-words">
                          {note.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed break-words line-clamp-6">
                          {note.content || 'No content'}
                        </p>
                      </>
                    )}

                    <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-xs text-white/70">
                        {note.createdAt ? new Date(note.createdAt).toLocaleDateString() : 'Just now'}
                      </span>
                      <div className="lg:hidden flex gap-2">
                        {editingId !== note.id && (
                          <>
                            <button
                              onClick={() => handleStartEdit(note)}
                              className="text-xs text-white/80 hover:text-white font-medium px-2 py-1 rounded hover:bg-white/20 transition-all"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteNote(note.id)}
                              className="text-xs text-white/80 hover:text-white font-medium px-2 py-1 rounded hover:bg-white/20 transition-all"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
