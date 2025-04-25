
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { School } from "lucide-react";

interface TeacherCardProps {
  name: string;
  branch: string;
  block: string;
  floor: string;
  imgUrl: string;
}

const TeacherCard = ({ name, branch, block, floor, imgUrl }: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4 items-start">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imgUrl} alt={name} />
            <AvatarFallback>
              <School className="h-8 w-8 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{branch}</p>
            {block && floor && (
              <p className="text-sm text-muted-foreground">
                Block {block}, Floor {floor}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
