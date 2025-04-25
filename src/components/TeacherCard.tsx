
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { School, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface TeacherCardProps {
  name: string;
  branch: string;
  block: string;
  floor: string;
  imgUrl: string;
}

const TeacherCard = ({ name, branch, block, floor, imgUrl }: TeacherCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm border-gray-200">
        <CardContent className="p-6">
          <div className="flex gap-4 items-start">
            <Avatar className="h-16 w-16 ring-2 ring-primary/10">
              <AvatarImage src={imgUrl} alt={name} />
              <AvatarFallback className="bg-primary/5">
                <School className="h-8 w-8 text-primary/70" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{branch}</p>
              {block && floor && (
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Block {block}, Floor {floor}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeacherCard;
