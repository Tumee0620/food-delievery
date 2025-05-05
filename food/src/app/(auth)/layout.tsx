export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-white">
        <div className="flex w-screen h-screen items-center justify-center p-20 gap-10">
          {children}
          <div className="w-[1500px] h-[600px] rounded-md bg-cover bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__')]"></div>
        </div>
      </div>
    </div>
  );
}
