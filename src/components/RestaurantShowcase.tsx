import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, MapPin, Phone, Mail, Clock, ChefHat, Utensils, Wine, Coffee } from 'lucide-react';
import { format } from 'date-fns';

const RestaurantShowcase = () => {
  const [date, setDate] = useState<Date>();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    time: '19:00',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    starters: [
      { name: 'Bruschetta Classica', description: 'Toasted bread with fresh tomatoes, basil, and garlic', price: '$12' },
      { name: 'Calamari Fritti', description: 'Crispy fried squid with lemon aioli', price: '$15' },
      { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic', price: '$13' },
      { name: 'Soup of the Day', description: 'Chef\'s daily creation with artisan bread', price: '$10' },
    ],
    mains: [
      { name: 'Grilled Salmon', description: 'Atlantic salmon with seasonal vegetables and lemon butter', price: '$28' },
      { name: 'Ribeye Steak', description: '12oz USDA Prime beef with truffle mashed potatoes', price: '$42' },
      { name: 'Lobster Risotto', description: 'Creamy arborio rice with Maine lobster and saffron', price: '$38' },
      { name: 'Wild Mushroom Pasta', description: 'Handmade fettuccine with forest mushrooms and truffle oil', price: '$24' },
      { name: 'Roasted Chicken', description: 'Free-range chicken with herbs de Provence and roasted vegetables', price: '$26' },
    ],
    desserts: [
      { name: 'Tiramisu', description: 'Classic Italian dessert with espresso and mascarpone', price: '$10' },
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '$12' },
      { name: 'Panna Cotta', description: 'Vanilla cream with berry compote', price: '$9' },
      { name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar', price: '$11' },
    ],
    drinks: [
      { name: 'House Red Wine', description: 'Selected Italian red blend', price: '$8/glass' },
      { name: 'House White Wine', description: 'Crisp Pinot Grigio', price: '$8/glass' },
      { name: 'Craft Cocktails', description: 'Ask your server for our signature cocktails', price: '$14' },
      { name: 'Espresso', description: 'Italian-style espresso', price: '$4' },
    ],
  };

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant interior' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Gourmet dish' },
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', alt: 'Breakfast spread' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Pizza' },
    { url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80', alt: 'Fine dining' },
    { url: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&q=80', alt: 'Dessert' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation submitted! We will confirm via email shortly.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 to-orange-900 text-white shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading">La Bella Cucina</h1>
            <div className="hidden md:flex gap-6">
              {['Home', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-amber-300 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-heading animate-slide-up">
            La Bella Cucina
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-amber-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Where Every Meal is a Masterpiece
          </p>
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Reserve a Table
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading text-red-900">Make a Reservation</DialogTitle>
                  <DialogDescription>
                    Book your table for an unforgettable dining experience
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <select
                        id="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    Confirm Reservation
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('menu')}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-red-900 px-8 py-6 text-lg shadow-lg transition-all duration-300"
            >
              View Menu
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 font-heading text-red-900">Our Menu</h2>
            <p className="text-xl text-gray-700">Crafted with passion, served with love</p>
          </div>

          <Tabs defaultValue="starters" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white shadow-lg p-2 rounded-xl">
              <TabsTrigger value="starters" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white">
                <ChefHat className="w-4 h-4" />
                Starters
              </TabsTrigger>
              <TabsTrigger value="mains" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white">
                <Utensils className="w-4 h-4" />
                Main Courses
              </TabsTrigger>
              <TabsTrigger value="desserts" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white">
                <Coffee className="w-4 h-4" />
                Desserts
              </TabsTrigger>
              <TabsTrigger value="drinks" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white">
                <Wine className="w-4 h-4" />
                Drinks
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((item, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-heading text-red-900">{item.name}</CardTitle>
                          <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                        </div>
                        <CardDescription className="text-gray-600">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-heading text-red-900">Gallery</h2>
            <p className="text-xl text-gray-700">A visual feast for your eyes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-heading text-red-900">Visit Us</h2>
            <p className="text-xl text-gray-700">We'd love to see you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-900">
                    <MapPin className="w-6 h-6 text-orange-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">123 Gourmet Street</p>
                  <p className="text-gray-700">Culinary District, CD 12345</p>
                  <p className="text-gray-700">United States</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-900">
                    <Clock className="w-6 h-6 text-orange-600" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-red-900">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday - Sunday</span>
                    <span className="font-semibold text-red-900">12:00 PM - 11:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-900">
                    <Phone className="w-6 h-6 text-orange-600" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">info@labellacucina.com</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176895719397!2d-73.98823492346658!3d40.758895971386936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 font-heading">La Bella Cucina</h3>
          <p className="text-amber-200 mb-6">Where Every Meal is a Masterpiece</p>
          <div className="flex justify-center gap-6 mb-6">
            {['Home', 'Menu', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-sm text-amber-100">© 2024 La Bella Cucina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantShowcase;
