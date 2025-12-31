import Card from '../components/Card'

export default function About() {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Countries Served', value: '50+' },
    { label: 'Satisfaction Rate', value: '99%' },
  ]

  const values = [
    {
      title: 'Innovation',
      description:
        'We constantly push the boundaries of what\'s possible, embracing new technologies and creative solutions.',
    },
    {
      title: 'Quality',
      description:
        'Every detail matters. We strive for excellence in everything we build and deliver.',
    },
    {
      title: 'User-Centric',
      description:
        'My users are at the heart of everything I do. Their success is my success.',
    },
    {
      title: 'Transparency',
      description:
        'I believe in open communication and honest relationships with my clients and partners.',
    },
  ]

  return (
    <div className="smooth-scroll">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 text-balance">
            We're passionate about building exceptional digital experiences that
            make a difference.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              My Story
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
              <p>
                Founded with a vision to revolutionize the digital landscape, I
                have been at the forefront of web application development for
                years. My journey began with a simple belief: technology should
                be beautiful, intuitive, and accessible to everyone.
              </p>
              <p>
                Today, I'm proud to serve clients worldwide, helping them
                transform their ideas into reality through cutting-edge
                solutions and exceptional user experiences. As a solo developer,
                I bring a unique perspective and dedication to every project,
                delivering results that exceed expectations.
              </p>
              <p>
                I'm not just building applications; I'm crafting digital
                experiences that inspire, engage, and empower users to achieve
                their goals.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              My Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover-lift">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

