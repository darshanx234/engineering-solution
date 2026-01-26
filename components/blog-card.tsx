import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/data/posts"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={post.thumbnail || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <Badge variant="secondary" className="mb-3">
            {post.category}
          </Badge>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
