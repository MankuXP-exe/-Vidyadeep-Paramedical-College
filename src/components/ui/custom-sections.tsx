import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    bg?: "white" | "gray" | "gradient" | "glass";
    container?: boolean;
}

export function Section({
    children,
    className,
    bg = "white",
    container = true,
    ...props
}: SectionProps) {
    const bgStyles = {
        white: "bg-white",
        gray: "bg-muted/30",
        gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
        glass: "bg-background/20 backdrop-blur-lg border border-white/20",
    };

    return (
        <section
            className={cn("py-16 md:py-24", bgStyles[bg], className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}

export function SectionTitle({
    title,
    subtitle,
    centered = true,
}: {
    title: string;
    subtitle?: string;
    centered?: boolean;
}) {
    return (
        <div className={cn("mb-12 space-y-4", centered && "text-center")}>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-primary tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-secondary rounded-full", centered && "mx-auto")} />
        </div>
    );
}

export function GlassCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn(
            "bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group",
            className
        )}>
            {children}
        </div>
    );
}
