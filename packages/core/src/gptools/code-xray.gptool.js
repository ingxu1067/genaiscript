gptool({
    title: "Code XRay",
    model: "gpt-4-32k",
    maxTokens: 16000,
    categories: ["samples"],
    description:
        "Given a source file in a programming language, extract the structure necessary to do LLM queries",
})

def("FILE", env.files.filter(f => !f.filename.endsWith(".xray")))
def("SPEC", env.context)

$`You are an expert at programming in all known languages.
For each FILE 'filename.<EXT>', generate the code structure in FILE 'filename.<EXT>.xray' 
that ignores the internal details of the implementation and extracts enough information for an LLM 
to use the code elements in the source file in the context of the SPEC task.
- Do not generate a pseudo-file for SPEC.
- Generate commments that describe the internal structure of the code if it is not obvious from the code signature.
`
