import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageSelectorProps {
  language: 'ja' | 'en';
  setLanguage: (lang: 'ja' | 'en') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="z-20">
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-[100px] bg-black text-gray-300 border-gray-700">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-black text-gray-300 border-gray-700">
          <SelectItem value="ja" className="hover:bg-gray-800">日本語</SelectItem>
          <SelectItem value="en" className="hover:bg-gray-800">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

