export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <a href="/routing">STATIC</a>
        </li>
        <li>
          <a href="/routing/dynamic/1234">DYNAMIC</a>
        </li>
        <li>
          <a href="/routing/nested/adfg/routing">NESTED</a>
        </li>
        <li>
          <a href="/routing/catch-all-segments/1/2/3/4/5/a/b/c/d">CATCH-ALL-SEGMENTS</a>
        </li>
      </ul>
    </main>
  )
}
