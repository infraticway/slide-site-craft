import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt-BR', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white z-[100]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`cursor-pointer ${language === lang.code ? 'bg-muted' : ''}`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
