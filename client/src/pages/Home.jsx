import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description:
        'Lightning-fast load times and smooth interactions powered by modern web technologies.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description:
        'Carefully crafted UI/UX that delights users and enhances their experience.',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description:
        'Seamless experience across all devices, from mobile phones to desktop computers.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description:
        'Built with security best practices and reliable infrastructure.',
    },
    {
      icon: '⚡',
      title: 'Scalable',
      description:
        'Architecture designed to grow with your needs and handle increased traffic.',
    },
    {
      icon: '✨',
      title: 'Modern Stack',
      description:
        'Built with the latest technologies and best practices in web development.',
    },
  ]

  return (
    <div className="smooth-scroll">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
              <span className="gradient-text animate-slide-up">Welcome to</span>
              <br />
              <span className="text-slate-900 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Dashify
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Your personal dashboard for productivity, notes, and organization.
              Beautiful, fast, and designed to help you stay organized and
              productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button as={Link} to="/notes" size="lg" variant="primary" className="hover-lift">
                Get Started
              </Button>
              <Button as={Link} to="/about" size="lg" variant="secondary" className="hover-lift">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Dashify?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the features that make Dashify your perfect productivity companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift text-center p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.5}s`, animationDuration: '2s' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-12 text-center animate-fade-in hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start organizing your life with Dashify. Create notes, stay productive,
              and achieve your goals with our beautiful, intuitive platform.
            </p>
            <Button
              as={Link}
              to="/notes"
              size="lg"
              variant="white"
              className="hover-lift"
            >
              Start Using Dashify
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

