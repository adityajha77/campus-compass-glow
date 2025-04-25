
import { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import { teachers, branches, blocks, floors } from '../data/teachers';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Teachers = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedBlock, setSelectedBlock] = useState<string>('');
  const [selectedFloor, setSelectedFloor] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter(teacher => {
    const matchesBranch = !selectedBranch || teacher.branch === selectedBranch;
    const matchesBlock = !selectedBlock || teacher.block === selectedBlock;
    const matchesFloor = !selectedFloor || teacher.floor === selectedFloor;
    const matchesSearch = !searchTerm || 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.branch.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesBranch && matchesBlock && matchesFloor && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent p-6">
      <div className="container mx-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 mb-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-primary">Faculty Directory</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Input
              placeholder="Search by name or branch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white"
            />
            
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger>
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Branches</SelectItem>
                {branches.map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBlock} onValueChange={setSelectedBlock}>
              <SelectTrigger>
                <SelectValue placeholder="Select Block" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Blocks</SelectItem>
                {blocks.map(block => (
                  <SelectItem key={block} value={block}>{block}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFloor} onValueChange={setSelectedFloor}>
              <SelectTrigger>
                <SelectValue placeholder="Select Floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Floors</SelectItem>
                {floors.map(floor => (
                  <SelectItem key={floor} value={floor}>{floor}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTeachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
