import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, User, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  author: string;
  date: string;
  location?: string;
  registrationPeriod?: string;
  eventPeriod?: string;
  featured?: boolean;
}

export function CompetitionCard({ id, title, description, tags, thumbnail, author, date, location, registrationPeriod, eventPeriod }: CompetitionCardProps) {
  return (
    <Link to={`/bai-dang/${id}`}>
      <Card className="bg-white/10 backdrop-blur-xl border-white/30 hover:bg-white/15 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 overflow-hidden">
            <ImageWithFallback
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[1px]" />
          </div>
        </CardHeader>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-white mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors">
            {title}
          </h3>
          <p className="text-white/80 line-clamp-3 mb-4 flex-1">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-500/30 backdrop-blur-md text-blue-100 hover:bg-blue-500/40 border border-blue-400/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex flex-col gap-2 w-full text-sm text-white/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
            {registrationPeriod && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Đăng ký: {registrationPeriod}</span>
              </div>
            )}
            {eventPeriod && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Sự kiện: {eventPeriod}</span>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}