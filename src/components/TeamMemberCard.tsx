import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import * as Dialog from "@radix-ui/react-dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import TermExplanation, { terminologies } from "./TermExplanation";

// Function to preprocess markdown and inject TermExplanation links
const processMarkdownForTerms = (markdown: string) => {
  let processedMarkdown = markdown;
  const sortedTermKeys = Object.keys(terminologies).sort(
    (a, b) =>
      terminologies[b].title.length -
      terminologies[a].title.length,
  );

  for (const termKey of sortedTermKeys) {
    const term = terminologies[termKey];
    const escapedTitle = term.title.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&",
    );
    const regex = new RegExp(`\\b${escapedTitle}\\b`, "gi");
    // Replace with custom HTML tag
    processedMarkdown = processedMarkdown.replace(
      regex,
      `<term-explain data-term-key="${termKey}">${term.title}</term-explain>`,
    );
  }
  return processedMarkdown;
};

interface TeamMemberCardProps {
  name: string;
  studentId: string;
  bio: string;
  avatar: string;
  role: string;
}

export function TeamMemberCard({
  name,
  studentId,
  bio,
  avatar,
  role,
}: TeamMemberCardProps) {
  const processedBio = processMarkdownForTerms(bio);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Card className="group cursor-pointer transition-all duration-300 border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden">
          {/* Liquid glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 group-hover:animate-[shine_1s] pointer-events-none" />
          
          <CardContent className="p-6 text-center relative z-10">
            <div className="mb-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/30 via-indigo-400/30 to-purple-400/30 border-2 border-white/40 shadow-lg group-hover:shadow-2xl group-hover:border-white/60 transition-all duration-300 relative">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              <Badge
                variant="secondary"
                className="mb-2 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 backdrop-blur-md text-blue-100 border border-blue-400/40 shadow-md group-hover:shadow-lg group-hover:from-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-300"
              >
                {role}
              </Badge>
            </div>

            <h3 className="text-white mb-1">{name}</h3>
            <p className="text-white/60 mb-3">{studentId}</p>
            <div className="text-white/80 text-sm leading-relaxed line-clamp-3 prose prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ ...props }) => (
                    <h1 className="text-white text-3xl font-bold mb-4" {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className="text-white text-2xl font-bold mb-3" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="text-white text-xl font-semibold mb-2" {...props} />
                  ),
                  h4: ({ ...props }) => (
                    <h4 className="text-white text-lg font-semibold mb-1" {...props} />
                  ),
                  h5: ({ ...props }) => (
                    <h5 className="text-white text-base font-semibold" {...props} />
                  ),
                  h6: ({ ...props }) => (
                    <h6 className="text-white text-base font-semibold" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="text-white" {...props} />
                  ),
                  strong: ({ ...props }) => (
                    <strong className="text-white" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="text-white" {...props} />
                  ),
                  "term-explain": ({ node, ...props }) => {
                    const termKey = props["data-term-key"]; // Access the data-term-key attribute
                    if (termKey) {
                      return (
                        <TermExplanation termKey={termKey}>
                          {props.children}
                        </TermExplanation>
                      );
                    }
                    return <>{props.children}</>; // Fallback
                  },
                }}
              >
                {bio}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 backdrop-blur-sm fixed inset-0 z-50 animate-in fade-in duration-300" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                                        <Dialog.Content
                                          style={{
                                            maxHeight: '90vh',
                                            overflowY: 'auto',
                                            position: 'relative',
                                          }}
                                          className="bg-gradient-to-br from-purple-500/90 to-blue-500/90 backdrop-blur-2xl text-white border border-white/30 shadow-2xl p-0 rounded-2xl max-w-2xl w-full animate-in zoom-in-95 duration-300 relative overflow-hidden"
                                        >
                                          {/* Liquid glass overlay effects */}
                                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                                          
                                          <div className="relative h-64 flex-shrink-0">
                                            <ImageWithFallback
                                              src={avatar}
                                              alt={name}
                                              className="w-full h-full object-cover rounded-t-2xl"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                            {/* Glass reflection effect on image */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-2xl" />
                                          </div>
                                          <div className="p-8 backdrop-blur-sm relative">
                                            <Dialog.Title className="text-3xl text-center font-bold mb-2">{name}</Dialog.Title>
                                            <Dialog.Description className="sr-only">
                                              Thông tin chi tiết về {name} - {role}
                                            </Dialog.Description>
                                            <div className="text-center text-blue-300 mb-2">{role}</div>
                                            <div className="text-center text-white/60 mb-4">{studentId}</div>
                                            <div className="prose prose-invert max-w-none text-white/80">
                                              <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw]}
                                                components={{
                                                  h1: ({ ...props }) => (
                                                    <h1 className="text-white text-3xl font-bold mb-4 text-center" {...props} />
                                                  ),
                                                  h2: ({ ...props }) => (
                                                    <h2 className="text-white text-2xl font-bold mb-3 text-center" {...props} />
                                                  ),
                                                  h3: ({ ...props }) => (
                                                    <h3 className="text-white text-xl font-semibold mb-2 text-left" {...props} />
                                                  ),
                                                  h4: ({ ...props }) => (
                                                    <h4 className="text-white text-lg font-semibold mb-1 text-left" {...props} />
                                                  ),
                                                  h5: ({ ...props }) => (
                                                    <h5 className="text-white text-base font-semibold text-left" {...props} />
                                                  ),
                                                  h6: ({ ...props }) => (
                                                    <h6 className="text-white text-base font-semibold text-left" {...props} />
                                                  ),
                                                  p: ({ ...props }) => (
                                                    <p className="text-white mb-4 text-left" {...props} />
                                                  ),
                                                  strong: ({ ...props }) => (
                                                    <strong className="text-white font-bold" {...props} />
                                                  ),
                                                  ul: ({ ...props }) => (
                                                    <ul className="list-disc list-inside text-white mb-4 ml-4 space-y-2 text-left" {...props} />
                                                  ),
                                                  ol: ({ ...props }) => (
                                                    <ol className="list-decimal list-inside text-white mb-4 ml-4 space-y-2 text-left" {...props} />
                                                  ),
                                                  li: ({ ...props }) => (
                                                    <li className="text-white text-left" {...props} />
                                                  ),
                                                  a: ({ ...props }) => (
                                                    <a className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors" {...props} />
                                                  ),
                                                  "term-explain": ({ node, ...props }) => {
                                                    const termKey = props["data-term-key"]; // Access the data-term-key attribute
                                                    if (termKey) {
                                                      return (
                                                        <TermExplanation termKey={termKey}>
                                                          {props.children}
                                                        </TermExplanation>
                                                      );
                                                    }
                                                    return <>{props.children}</>; // Fallback
                                                  },
                                                  code: ({ inline, ...props }: any) => 
                                                    inline ? (
                                                      <code className="bg-white/10 text-blue-200 px-1.5 py-0.5 rounded" {...props} />
                                                    ) : (
                                                      <code className="block bg-white/10 text-blue-200 p-4 rounded-lg mb-4 overflow-x-auto text-left" {...props} />
                                                    ),
                                                  blockquote: ({ ...props }) => (
                                                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white/80 mb-4 text-left" {...props} />
                                                  ),
                                                }}
                                              >
                                                {processedBio}
                                              </ReactMarkdown>
            </div>
                      </div>
                      <Dialog.Close asChild>
                        <button className="absolute top-4 right-4 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </Dialog.Close>
                    </Dialog.Content>        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}