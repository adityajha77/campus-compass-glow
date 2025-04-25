
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
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg mb-6"
        >
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Faculty Directory
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              <Input
                placeholder="Search by name or branch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200"
              />
            </div>
            
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-gray-200">
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
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-gray-200">
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
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-gray-200">
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTeachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TeacherCard {...teacher} />
                </motion.div>
              ))}
            </motion.div>
          </ScrollArea>
        </motion.div>
      </div>
    </div>
  );
};

export default Teachers;
