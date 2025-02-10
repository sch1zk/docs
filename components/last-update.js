"use client"

export const LastUpdate = ({ date }) => {
  if (!date) return null

  return (
    <>
      {"Последнее обновление: "}
      <time
        dateTime={date.toISOString()}
        suppressHydrationWarning
      >
        {date.toLocaleDateString("ru", {
          day: "numeric",
          month: "numeric",
          year: "numeric"
        })}
      </time>
    </>
  )
}