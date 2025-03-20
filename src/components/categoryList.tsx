"use client";
import { ChevronRight } from "lucide-react";


type Category = {
    name: string;
    subcategories: string[];
}

type CategoryListProps = {
    category: Category;
    toggleCategory: (name: string) => void;
    openCategories: { [key: string]: boolean };
}

const CategoryList: React.FC<CategoryListProps> = ({ category, toggleCategory, openCategories }) => {
    return (
        <li>
            <div
                className="flex justify-between items-center cursor-pointer hover:text-gray-900 md:pl-0 rounded-lg transition-all"
                onClick={() => toggleCategory(category.name)}
            >
                <span>{category.name}</span>
                {category.subcategories.length > 0 && (
                    <ChevronRight
                        size={20}
                        className={`transition-transform font-bold ${openCategories[category.name] ? "rotate-90" : "rotate-0"}`}
                    />
                )}
            </div>

            {/* Subcategories (Dropdown) */}
            {category.subcategories.length > 0 && (
                <ul
                    className={`ml-4 md:space-y-2 space-y-1 text-gray-600 transition-all duration-300 
                    ${openCategories[category.name] ? "max-h-24 opacity-100 md:mt-2 mt-1 md:mb-10 mb-6" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                    {category.subcategories.map((sub, subIndex) => (
                        <li key={subIndex} className="md:pl-2 hover:text-gray-800 cursor-pointer">
                            {sub}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CategoryList;